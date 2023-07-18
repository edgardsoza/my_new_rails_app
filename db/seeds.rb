greetings = ['Hello', 'Bonjour', 'Hola', 'Ciao', 'Namaste']

greetings.each do |greeting|
  Message.create(content: greeting)
end
