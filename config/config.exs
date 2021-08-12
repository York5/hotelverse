# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :hotelverse,
  ecto_repos: [Hotelverse.Repo],
  migration_primary_key: [name: :id, type: :binary_id]

# Configures the endpoint
config :hotelverse, HotelverseWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "0eMZUsvpt2wzVT3s30pE7A8WhpZcihDYqS5Mohb+/B/RIW7P7yNatHyAliP4afJb",
  render_errors: [view: HotelverseWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: Hotelverse.PubSub,
  live_view: [signing_salt: "LOV6Rpeq"]

config :hotelverse, :pow,
  user: Hotelverse.Users.User,
  repo: Hotelverse.Repo,
  users_context: Hotelverse.Users

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
