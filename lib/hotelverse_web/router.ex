defmodule HotelverseWeb.Router do
  use HotelverseWeb, :router
  use Pow.Phoenix.Router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug Pow.Plug.Session, otp_app: :hotelverse
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug HotelverseWeb.APIAuthPlug, otp_app: :hotelverse
  end

  pipeline :api_protected do
    plug Pow.Plug.RequireAuthenticated, error_handler: HotelverseWeb.APIAuthErrorHandler
  end

  scope "/api/v1", HotelverseWeb.API.V1, as: :api_v1 do
    pipe_through :api

    resources "/registration", RegistrationController, singleton: true, only: [:create]
    resources "/session", SessionController, singleton: true, only: [:create, :delete]
    post "/session/renew", SessionController, :renew
  end

  scope "/api/v1", HotelverseWeb do
    pipe_through :api

    resources "/properties", PropertyController, only: [:index, :show]
    # resources "/images", ImageController, only: [:index, :show]
    # resources "/extras", ExtraController, only: [:index, :show]
    resources "/features", FeatureController, only: [:index]
  end

  scope "/api/v1", HotelverseWeb, as: :api_v1 do
    pipe_through [:api, :api_protected]

    resources "/properties", PropertyController
    resources "/images", ImageController
    resources "/extras", ExtraController
    resources "/features", FeatureController
    resources "/bookings", BookingController
  end




  # scope "/" do
  #   pipe_through :browser

  #   pow_routes()
  # end

  scope "/", HotelverseWeb do
    pipe_through :browser

    get "/*path", PageController, :index
    # get "/listing", PageController, :index
    # get "/details", PageController, :index
  end


  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through :browser
      live_dashboard "/dashboard", metrics: HotelverseWeb.Telemetry
    end
  end
end
