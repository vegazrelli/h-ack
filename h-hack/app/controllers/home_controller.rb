class HomeController < ApplicationController

  def index
    respond_to do |format|
      format.html { render layout: "discover" }
    end
  end
end
