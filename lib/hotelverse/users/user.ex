defmodule Hotelverse.Users.User do
  use Hotelverse.Schema
  use Pow.Ecto.Schema

  schema "users" do
    pow_user_fields()
    field :role, :string, null: false, default: "guest"

    field :first_name, :string, null: false
    field :last_name, :string, null: false
    has_many :properties, Hotelverse.Properties.Property

    timestamps()
  end

  def changeset(user_or_changeset, attrs) do
    user_or_changeset
    |> pow_changeset(attrs)
    |> Ecto.Changeset.cast(attrs, [:role, :first_name, :last_name])
    |> Ecto.Changeset.validate_required([:role, :first_name, :last_name])
  end

  # alias Plug.Conn
  # use Pow.Ecto.Context,
  #   repo: Hotelverse.Repo,
  #   user: Hotelverse.Users.User


  def init_db do
    case Hotelverse.Users.list_users do
      [] ->
        do_init_db()
      _ ->
        false;
    end
  end
  defp do_init_db() do
    data = [
      %{"email" => "bado@email.com", "password" => "12345678", "password_confirmation" => "12345678", "first_name" => "B", "last_name" => "K", "role" => "guest"},
      %{"email" => "mike@email.com", "password" => "12345678", "password_confirmation" => "12345678", "first_name" => "M", "last_name" => "V", "role" => "guest"},
      %{"email" => "umid@email.com", "password" => "12345678", "password_confirmation" => "12345678", "first_name" => "U", "last_name" => "K", "role" => "guest"}
    ]

    Enum.map(data, fn user ->
      Hotelverse.Users.create(user)
      # Pow.Ecto.Context.create(user)
      # pow_create
      # Pow.Plug.create_user(%{private: %{}}, user)
    end)
  end

end

# defmodule Hotelverse.Users.User do
#   use Hotelverse.Schema
#   use Pow.Ecto.Schema

#   schema "users" do
#     pow_user_fields()

#     field :first_name, :string, null: false
#     field :last_name, :string, null: false
#     field :role, :string, null: false, default: "guest"

#     timestamps()
#   end

#   @spec changeset_role(Ecto.Schema.t() | Ecto.Changeset.t(), map()) :: Ecto.Changeset.t()
#   def changeset_role(user_or_changeset, attrs) do
#     user_or_changeset
#     |> Ecto.Changeset.cast(attrs, [:role, :first_name, :last_name])
#     |> Ecto.Changeset.validate_inclusion(:role, ~w(admin guest))
#   end

#   def changeset_first_name(user_or_changeset, attrs) do
#     user_or_changeset
#     |> Ecto.Changeset.cast(attrs, [:first_name])
#   end

#   def changeset_last_name(user_or_changeset, attrs) do
#     user_or_changeset
#     |> Ecto.Changeset.cast(attrs, [:last_name])
#   end
# end
