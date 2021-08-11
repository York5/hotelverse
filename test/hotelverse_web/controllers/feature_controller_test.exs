defmodule HotelverseWeb.FeatureControllerTest do
  use HotelverseWeb.ConnCase

  alias Hotelverse.Content
  alias Hotelverse.Content.Feature

  @create_attrs %{
    name: "some name",
    property_id: 42
  }
  @update_attrs %{
    name: "some updated name",
    property_id: 43
  }
  @invalid_attrs %{name: nil, property_id: nil}

  def fixture(:feature) do
    {:ok, feature} = Content.create_feature(@create_attrs)
    feature
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all features", %{conn: conn} do
      conn = get(conn, Routes.feature_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create feature" do
    test "renders feature when data is valid", %{conn: conn} do
      conn = post(conn, Routes.feature_path(conn, :create), feature: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.feature_path(conn, :show, id))

      assert %{
               "id" => id,
               "name" => "some name",
               "property_id" => 42
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.feature_path(conn, :create), feature: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update feature" do
    setup [:create_feature]

    test "renders feature when data is valid", %{conn: conn, feature: %Feature{id: id} = feature} do
      conn = put(conn, Routes.feature_path(conn, :update, feature), feature: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.feature_path(conn, :show, id))

      assert %{
               "id" => id,
               "name" => "some updated name",
               "property_id" => 43
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, feature: feature} do
      conn = put(conn, Routes.feature_path(conn, :update, feature), feature: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete feature" do
    setup [:create_feature]

    test "deletes chosen feature", %{conn: conn, feature: feature} do
      conn = delete(conn, Routes.feature_path(conn, :delete, feature))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.feature_path(conn, :show, feature))
      end
    end
  end

  defp create_feature(_) do
    feature = fixture(:feature)
    %{feature: feature}
  end
end
