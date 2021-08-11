defmodule HotelverseWeb.FeatureController do
  use HotelverseWeb, :controller

  alias Hotelverse.Content
  alias Hotelverse.Content.Feature

  action_fallback HotelverseWeb.FallbackController

  def index(conn, _params) do
    features = Content.list_features()
    render(conn, "index.json", features: features)
  end

  def create(conn, %{"feature" => feature_params}) do
    with {:ok, %Feature{} = feature} <- Content.create_feature(feature_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.feature_path(conn, :show, feature))
      |> render("show.json", feature: feature)
    end
  end

  def show(conn, %{"id" => id}) do
    feature = Content.get_feature!(id)
    render(conn, "show.json", feature: feature)
  end

  def update(conn, %{"id" => id, "feature" => feature_params}) do
    feature = Content.get_feature!(id)

    with {:ok, %Feature{} = feature} <- Content.update_feature(feature, feature_params) do
      render(conn, "show.json", feature: feature)
    end
  end

  def delete(conn, %{"id" => id}) do
    feature = Content.get_feature!(id)

    with {:ok, %Feature{}} <- Content.delete_feature(feature) do
      send_resp(conn, :no_content, "")
    end
  end
end
