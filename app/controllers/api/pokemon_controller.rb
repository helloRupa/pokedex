class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render :index
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)

    if @pokemon.save
      render :show
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  def show
    @pokemon = Pokemon.find_by_id(params[:id])

    if @pokemon
      render :show
    else
      render json: ['Pokemon does not exist'], status: 422
    end
  end

  def update
    @pokemon = Pokemon.find_by_id(params[:id])

    if @pokemon.update_attributes(pokemon_params)
      render :show
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :image_url, moves: [])
  end
end