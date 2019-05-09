# Ruby Classes and Inheritance

# Class Methods
1.class
1.2.class
'hi'.class
[1, 2, 3].class

# Getters and Setters
class Hobbit
  def set_name=name
    @name=name
  end

  def get_name
    @name
  end
end

# hobbit = Hobbit.new
# hobbit.set_name="Bilbo"
# p hobbit.get_name

# Initializing with values
class Jedi
  def initialize(name)
    @title = 'Knight'
    @name = name
  end
  def title
    @title
  end
  def set_title=title
    @title = title
  end
end

jedi = Jedi.new('Anakin')
p jedi
jedi.set_title='Padawan'
p jedi

jedi_2 = Jedi.new('Obi Wan')
p jedi_2

# Inheritance

class Fruit

  def initialize(color, seeds)
    @color = color
    @vitamins = []
  end

  def color
    @color
  end

  def add_vitamin(vitamin)
    @vitamins << vitamin
  end

  def vitamins
    @vitamins
  end

  def is_sweet
    true
  end
end

class Orange < Fruit
  def initialize(color, seeds)
    super("#{color} orange", seeds)
    @seeds = seeds
  end
end

orange = Orange.new('orange', true)
p orange
p orange.is_sweet

# Other Class Relationships: has_many
class Vitamin
  def initialize(type)
    @type = type
  end
end

v = Vitamin.new("c")

orange.add_vitamin(v)
orange.add_vitamin(v)
orange.add_vitamin(v)
p orange.vitamins
