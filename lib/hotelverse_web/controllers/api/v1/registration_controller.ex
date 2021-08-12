defmodule HotelverseWeb.API.V1.RegistrationController do
  use HotelverseWeb, :controller

  alias Ecto.Changeset
  alias Plug.Conn
  alias HotelverseWeb.ErrorHelpers

  @spec create(Conn.t(), map()) :: Conn.t()
  def create(conn, %{"user" => user_params}) do
    conn
    |> Pow.Plug.create_user(user_params)
    |> case do
      {:ok, user, conn} ->
        resp = HotelverseWeb.API.V1.SessionController.make_resp(conn, user)
        json(conn, resp)

      {:error, changeset, conn} ->
        errors = Changeset.traverse_errors(changeset, &ErrorHelpers.translate_error/1)

        conn
        |> put_status(500)
        |> json(%{error: %{status: 500, message: "Couldn't create user", errors: errors}})
    end
  end
end
