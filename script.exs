defmodule YourApplication do
  use Xee.ThemeScript
  require Logger

  # Callbacks
  def script_type do
    :message
  end

  def install, do: nil

  def init do
    {:ok, %{"data" => %{
       page: "waiting",
       participants: %{},
       res: %{},
       t_res: %{},
       join_teacher: %{},
       joined: 0,
       answered: 0,
       teacher_answered: 0,
       student_answered: 0,
       teachers: 0,
     }}}
  end

  def new_participant(isactive) do
    if isactive do
      %{
        status: nil,
        is_red_description: false,
      }
    else
      %{
        status: "noactive",
        is_red_description: false,
      }
    end
  end

  def join(%{participants: participants} = data, id) do
    Logger.debug "Joined"
    unless Map.has_key?(participants, id) do
      participant = if data.page == "experiment" do
        new_participant(false)
      else
        new_participant(true)
      end
      participants = Map.put(participants, id, participant)
      data = %{data | participants: participants}
      unless data.page == "experiment" do
        data = %{data | joined: Map.size(participants)}
      end
      action = %{
        type: "ADD_USER",
        id: id,
        users: participants,
        joined: data.joined,
      }
      participant_action = %{
        type: "ADD_USER",
        joined: data.joined,
      }
      {:ok, %{"data" => data, "host" => %{action: action}, "participant" => dispatch_to_all(participants, participant_action)}}
    else
      {:ok, %{"data" => data}}
    end
  end


  def handle_received(data, %{"action" => "change page", "params" => params}) do
    data = %{data | page: params}
    unless data.page == "result" do
      data = Map.put(data, :joined, Map.size(data.participants))
      data = Map.put(data, :answered, 0)
      participants = Enum.map(data.participants, fn {id, _} ->
        {id, new_participant(true)} end) |> Enum.into(%{})
       data = %{data | participants: participants}
    end
    if data.page == "description" do
      data = %{ data | red_description: 0}
    end
    host_action = %{
      type: "CHANGE_PAGE",
      page: data.page,
      text: data.text,
      users: data.participants,
      answered: data.answered,
      red_description: data.red_description,
      joined: data.joined,
    }
    participant_action = Enum.map(data.participants, fn {id, _} ->
      {id, %{action: if data.page == "result" do
          %{
            type: "FETCH_CONTENTS",
            page: data.page,
            text: data.text,
            status: data.participants[id].status,
            answered: data.answered,
            joined: data.joined,
          }
      else
        %{
          type: "FETCH_CONTENTS",
          page: data.page,
          text: data.text,
          status: data.participants[id].status,
          answered: data.answered,
          joined: data.joined,
        }
      end}} end) |> Enum.into(%{})
     {:ok, %{"data" => data, "host" => %{action: host_action}, "participant" => participant_action}}
  end

  def handle_received(data, %{"action" => "fetch contents"}, id) do
    action = if data.page == "result" do
      %{
        type: "FETCH_CONTENTS",
        page: data.page,
        text: data.text,
        status: data.participants[id].status,
        answered: data.answered,
        joined: data.joined,
      }
    else
      %{
        type: "FETCH_CONTENTS",
        page: data.page,
        text: data.text,
        status: data.participants[id].status,
        answered: data.answered,
        joined: data.joined,
      }
    end
    {:ok, %{"data" => data, "participant" => %{id => %{action: action}}}}
  end

     def handle_received( data, %{ "action" => "submit answer" , "params" => params}, id ) do
      data = %{ data | res: Map.put(data.res, Integer.to_string(data.student_answered), params)}
      data = %{ data | answered: data.answered + 1 }
      data = %{ data | student_answered: data.student_answered + 1 }
      host_action = %{
        type: "SUBMIT_ANSWER",
        users: data.participants,
        answered: data.answered,
        joined: data.joined,
      }
    participant_action = Enum.map(data.participants, fn {id, _} ->
      {id, %{action: 
          %{
            type: "SUBMIT_ANSWER",
            student_answered: data.student_answered,
            answered: data.answered,
            joined: data.joined,
            res: data.res
          }
     }} end)
 {:ok, %{"data" => data, "host" => %{action: host_action}, "participant" => participant_action}}
  end

  def handle_received( data, %{ "action" => "teacher submit answer" , "params" => params}, id ) do
      data = %{ data | t_res: Map.put(data.t_res, Integer.to_string(data.teacher_answered), params)}
      data = %{ data | answered: data.answered + 1 }
      data = %{ data | teacher_answered: data.teacher_answered + 1 }
      host_action = %{
        type: "TEACHER_SUBMIT_ANSWER",
        users: data.participants,
        answered: data.answered,
        joined: data.joined,
      }
    participant_action = Enum.map(data.participants, fn {id, _} ->
      {id, %{action: 
          %{
            type: "TEACHER_SUBMIT_ANSWER",
            teacher_answered: data.teacher_answered,
            joined: data.joined,
            t_res: data.t_res,
          }
     }} end)
 {:ok, %{"data" => data, "host" => %{action: host_action}, "participant" => participant_action}}
  end


    def handle_received(data, %{"action" => "join teacher", "params" => params}, id) do
    data = %{ data | teachers: Map.put(data.teachers, Integer.to_string(data.join_teacher), params)}
    data = %{ data | join_teacher: data.join_teacher + 1 }
     host_action = %{
         type: "JOIN_TEACHER",
        teachers: data.teachers,
          join_teacher: data.join_teacher
      }
    participant_action = Enum.map(data.participants, fn {id, _} ->
      {id, %{action: 
        %{
          type: "JOIN_TEACHER",
          teachers: data.teachers,
          join_teacher: data.join_teacher
        }
      }} end)
  {:ok, %{"data" => data, "participant" => participant_action}}
  end
  def handle_received(data, _action, _id) do
    {:ok, %{"data" => data}}
  end

    def dispatch_to_all(participants, action) , do: Enum.map(participants, fn {id, _} ->
    {id, %{action: action}} end) |> Enum.into(%{})
end
