
// Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boasvindas para ela:
// Ex:
// Qual é o seu nome? João da Silva
// Olá João da Silva, é um prazer te conhecer!

class Ex002
{
  public string? name;

  public void Saudation()
  {
    Console.WriteLine($"Qual é o seu nome?");
    name = Console.ReadLine();

    Console.Clear();
    Console.WriteLine($"Olá {name}, é um prazer te conhecer!");
  }
}

