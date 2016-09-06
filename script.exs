defmodule YourApplication do
  use Xee.ThemeScript

  # Callbacks
  def script_type do
    :message
  end

  def install, do: nil

  def init do
    {:ok, %{"data" => %{
       started: false,
     }}}
  end

  def join(data, id) do
    {:ok, %{"data" => data}}
  end

  def handle_received(data, %{"action"=>"start"}) do
    data = %{data | started: true}
    action = %{
      type: "START"
    }
    {:ok, %{"data" => data, "host" => %{action: action}}}
  end

    def handle_received(data, %{"action"=>"stop"}) do
    data = %{data | started: false}
    action = %{
      type: "STOP"
    }
    {:ok, %{"data" => data, "host" => %{action: action}}}
  end

  def handle_received(data, _action, _id) do
    {:ok, %{"data" => data}}
  end
end
