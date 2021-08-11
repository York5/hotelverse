defmodule HotelverseWeb.PageController do
  use HotelverseWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
