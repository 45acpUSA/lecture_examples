require 'rspec' # Require RSpec testing library
require_relative 'car'

describe "Car" do
  it "has to be real" do
    expect{Car.new}.to_not raise_error
  end

  it "has a color" do
    car = Car.new
    expect(car.color).to be_a String
  end

  it "can change color" do
    car = Car.new
    car.color= "Blue"
    expect(car.color).to eq "Blue"
  end

  it "has a speed" do
    car = Car.new
    expect(car.speed).to be_a Numeric
  end

  # A pending test (no do or end)
  it "can accelerate"
end
