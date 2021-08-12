defmodule HotelverseWeb.PropertyController do
  use HotelverseWeb, :controller

  alias Hotelverse.Properties
  alias Hotelverse.Properties.Property

  action_fallback HotelverseWeb.FallbackController

  def index(conn, _params) do
    properties = Properties.list_properties()
    render(conn, "index.json", properties: properties)
  end

  def create(conn, %{"property" => property_params}) do
    selected_features = Enum.map(property_params["features"], fn feature -> feature["value"] end)
    property_params = Map.put(property_params, "features", selected_features)
    with {:ok, %Property{} = property} <- Properties.create_property(property_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.property_path(conn, :show, property))
      |> render("show.json", property: property)
    end
  end

  def show(conn, %{"id" => id}) do
    property = Properties.get_property!(id)
    render(conn, "show.json", property: property)
  end

  def update(conn, %{"id" => id, "property" => property_params}) do
    property = Properties.get_property!(id)

    with {:ok, %Property{} = property} <- Properties.update_property(property, property_params) do
      render(conn, "show.json", property: property)
    end
  end

  def delete(conn, %{"id" => id}) do
    property = Properties.get_property!(id)

    with {:ok, %Property{}} <- Properties.delete_property(property) do
      send_resp(conn, :no_content, "")
    end
  end
end
