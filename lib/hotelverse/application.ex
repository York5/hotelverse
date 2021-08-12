defmodule Hotelverse.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      Hotelverse.Repo,
      # Start the Telemetry supervisor
      HotelverseWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: Hotelverse.PubSub},
      # Start the Endpoint (http/https)
      HotelverseWeb.Endpoint
      # Start a worker by calling: Hotelverse.Worker.start_link(arg)
      # {Hotelverse.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Hotelverse.Supervisor]
    resp = Supervisor.start_link(children, opts)
    Hotelverse.init_db()
    resp
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    HotelverseWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
