defmodule Hotelverse do
  @moduledoc """
  Hotelverse keeps the contexts that define your domain
  and business logic.

  Contexts are also responsible for managing your data, regardless
  if it comes from the database, an external API or others.
  """
  # mix phx.gen.json Properties Property properties title:string price:float rating:float location:string description:string
  # mix phx.gen.json Content Image images property_id:integer url:string
  # mix phx.gen.json Content Feature features property_id:integer name:string
  # mix phx.gen.json Content Extra extras property_id:integer name:string price:float

  # mix phx.gen.json Bookings Booking bookings user_id:integer property_id:integer checkin:date checkout:date adults:integer kids:integer

end
