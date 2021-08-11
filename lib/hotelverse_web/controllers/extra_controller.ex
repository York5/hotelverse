defmodule HotelverseWeb.ExtraController do
  use HotelverseWeb, :controller

  alias Hotelverse.Content
  alias Hotelverse.Content.Extra

  action_fallback HotelverseWeb.FallbackController

  def index(conn, _params) do
    extras = Content.list_extras()
    render(conn, "index.json", extras: extras)
  end

  def create(conn, %{"extra" => extra_params}) do
    with {:ok, %Extra{} = extra} <- Content.create_extra(extra_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.extra_path(conn, :show, extra))
      |> render("show.json", extra: extra)
    end
  end

  def show(conn, %{"id" => id}) do
    extra = Content.get_extra!(id)
    render(conn, "show.json", extra: extra)
  end

  def update(conn, %{"id" => id, "extra" => extra_params}) do
    extra = Content.get_extra!(id)

    with {:ok, %Extra{} = extra} <- Content.update_extra(extra, extra_params) do
      render(conn, "show.json", extra: extra)
    end
  end

  def delete(conn, %{"id" => id}) do
    extra = Content.get_extra!(id)

    with {:ok, %Extra{}} <- Content.delete_extra(extra) do
      send_resp(conn, :no_content, "")
    end
  end
end
