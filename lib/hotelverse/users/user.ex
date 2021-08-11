defmodule Hotelverse.Users.User do
  use Ecto.Schema
  use Pow.Ecto.Schema

  schema "users" do
    field :role, :string, null: false, default: "user"

    pow_user_fields()

    timestamps()
  end
end
