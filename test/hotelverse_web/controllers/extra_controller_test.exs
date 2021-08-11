defmodule HotelverseWeb.ExtraControllerTest do
  use HotelverseWeb.ConnCase

  alias Hotelverse.Content
  alias Hotelverse.Content.Extra

  @create_attrs %{
    name: "some name",
    price: 120.5,
    property_id: 42
  }
  @update_attrs %{
    name: "some updated name",
    price: 456.7,
    property_id: 43
  }
  @invalid_attrs %{name: nil, price: nil, property_id: nil}

  def fixture(:extra) do
    {:ok, extra} = Content.create_extra(@create_attrs)
    extra
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all extras", %{conn: conn} do
      conn = get(conn, Routes.extra_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create extra" do
    test "renders extra when data is valid", %{conn: conn} do
      conn = post(conn, Routes.extra_path(conn, :create), extra: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.extra_path(conn, :show, id))

      assert %{
               "id" => id,
               "name" => "some name",
               "price" => 120.5,
               "property_id" => 42
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.extra_path(conn, :create), extra: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update extra" do
    setup [:create_extra]

    test "renders extra when data is valid", %{conn: conn, extra: %Extra{id: id} = extra} do
      conn = put(conn, Routes.extra_path(conn, :update, extra), extra: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.extra_path(conn, :show, id))

      assert %{
               "id" => id,
               "name" => "some updated name",
               "price" => 456.7,
               "property_id" => 43
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, extra: extra} do
      conn = put(conn, Routes.extra_path(conn, :update, extra), extra: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete extra" do
    setup [:create_extra]

    test "deletes chosen extra", %{conn: conn, extra: extra} do
      conn = delete(conn, Routes.extra_path(conn, :delete, extra))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.extra_path(conn, :show, extra))
      end
    end
  end

  defp create_extra(_) do
    extra = fixture(:extra)
    %{extra: extra}
  end
end
