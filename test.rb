require 'pry'
class Enemy
  def attack
    puts "U deal 1 damage"
  end
  def defend
    puts "defending"
  end
end

class Boss < Enemy
  def attack
    puts "U deal 5 damage"
  end
end


def good_math(num)
  num += something_more_than_once(num)
  num + 2
  num += something_more_than_once(num)
  num - 5
  num += something_more_than_once(num)
  puts num
end

def something_more_than_once(num)
  puts "adding + 1 to #{num}"
  num + 1
end

good_math(0)
