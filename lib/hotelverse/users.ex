defmodule Hotelverse.Users do
  use Pow.Ecto.Context,
    repo: Hotelverse.Repo,
    user: Hotelverse.Users.User

  alias Hotelverse.{Repo, Users.User}

  # def authenticate(params), do: pow_authenticate(params)
  # def create(params), do: pow_create(params)
  # def update(user, params), do: pow_update(user, params)
  # def delete(user), do: pow_delete(user)
  # def get_by(clauses), do: pow_get_by(clauses)

  # def init do
  #   {:ok, _last_event_id} = :ac_events.init_store(:ac_users.store_id)
  #   # case :ac_events.init_store(:ac_users.store_id) do
  #   #   {:ok, 0} ->
  #   #     :ok
  #   #   {:ok, last_event_id} ->
  #   #     rebuild_last_state(1, last_event_id)
  #   # end
  # end

  # def rebuild_last_state(event_id, last_event_id) when event_id > last_event_id do
  #   {:ok, :ready}
  # end

  # def rebuild_last_state(event_id, last_event_id) when event_id <= last_event_id do
  #   {:ok, event} = :ac_events.read(:ac_users.store_id, event_id)
  #   {:ok, _} = apply_event(event)
  #   rebuild_last_state(event_id + 1, last_event_id)
  # end

  # def apply_event({:event, _event_id, :ac_users, :user_created, data, _timestamp}) do
  #   params = %{
  #     "email" => data.email,
  #     "password" => data.password,
  #     "password_confirmation" => data.password
  #   }
  #   {:ok, user} = pow_create(params)
  # end
  def list_users do
    Repo.all(User)
  end

  def get_user!(id) do
    Repo.get!(User, id) |> Repo.preload(exchange_accounts: [:exchange])
  end

  def create(%{"email" => "admin@altbot.tech"} = params), do: create_admin(params)
  def create(%{"email" => "chell88@list.ru"} = params), do: create_admin(params)

  def create(params) do
    case is_unique_email_id(params["email"]) do
      true ->
        pow_create(params)
      false ->
        changeset = %{
          action: :insert,
          errors: [
            email: {"has already been taken", [
              constraint: :unique,
              constraint_name: "users_email_index"
              ]
            }
          ],
          valid?: false
        }
        {:error, changeset}
    end
  end


  def authenticate(params) do
    pow_authenticate(params)
  end

  def update(user, params) do
    # since ecto_mnesia3 does not support unique_index (here on email),
    # the duplicated email_id can be used while updating the email of user,
    # hence it is needed to implement own ecto adapter for mnesia
    pow_update(user, params)
  end

  def delete(user) do
    pow_delete(user)
  end

  def get_by(clauses) do
    pow_get_by(clauses)
  end

  @type t :: %User{}

  @spec create_admin(map()) :: {:ok, t()} | {:error, Ecto.Changeset.t()}
  def create_admin(params) do
    %User{}
    |> User.changeset(params)
    |> User.changeset_role(%{role: "admin"})
    |> Repo.insert()
  end

  @spec set_admin_role(t()) :: {:ok, t()} | {:error, Ecto.Changeset.t()}
  def set_admin_role(user) do
    user
    |> User.changeset_role(%{role: "admin"})
    |> Repo.update()
  end

  defp is_unique_email_id(email) do
    case get_by(%{:email => email}) do
      nil -> true
      _ -> false
    end
  end

end
