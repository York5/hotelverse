defmodule Hotelverse.Users.User do
  use Hotelverse.Schema
  use Pow.Ecto.Schema

  schema "users" do
    pow_user_fields()
    field :role, :string, null: false, default: "guest"

    field :first_name, :string, null: false
    field :last_name, :string, null: false

    timestamps()
  end

  def changeset(user_or_changeset, attrs) do
    user_or_changeset
    |> pow_changeset(attrs)
    |> Ecto.Changeset.cast(attrs, [:role, :first_name, :last_name])
    |> Ecto.Changeset.validate_required([:role, :first_name, :last_name])
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
