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
        resp = %{
          data: %{
            user_id: user.id,
            user_email: user.email,
            user_role: user.role,
            access_token: conn.private.api_access_token,
            renewal_token: conn.private.api_renewal_token
          }
        }
        json(conn, resp)

      {:error, changeset, conn} ->
        errors = Changeset.traverse_errors(changeset, &ErrorHelpers.translate_error/1)

        conn
        |> put_status(500)
        |> json(%{error: %{status: 500, message: "Couldn't create user", errors: errors}})
    end
  end
end
