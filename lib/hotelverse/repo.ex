defmodule Hotelverse.Repo do
  use Ecto.Repo,
    otp_app: :hotelverse,
    adapter: Ecto.Adapters.Postgres
end
