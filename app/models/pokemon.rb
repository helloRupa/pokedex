class Pokemon < ApplicationRecord
  TYPES = [
    'fire',
    'electric',
    'normal',
    'ghost',
    'psychic',
    'water',
    'bug',
    'dragon',
    'grass',
    'fighting',
    'ice',
    'flying',
    'poison',
    'ground',
    'rock',
    'steel'
  ].sort.freeze

  IMAGE_ROOT_PATH = 'app/assets/images/pokemon_snaps/'

  validates :attack, :defense, :image_url, :name, :poke_type, presence: true
  validates :name, uniqueness: true
  validates :attack, :defense, numericality: true
  validates :poke_type, inclusion: { in: TYPES }
  validate :image_exists, unless: Proc.new { |a| a.image_url.nil? }

  has_many :items

  def image_exists
    return if %w[http:// https:// www.].any? {|pre| self.image_url.start_with?(pre)} &&
      %w[svg jpg png jpeg gif].any? {|suff| self.image_url.ends_with?(suff)}

    if !File.exist?(IMAGE_ROOT_PATH + self.image_url)
      self.errors.add(:image_url, 'file must exist or format must be URL')
    end
  end
end
