// Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
// situação em relação ao alistamento militar.
// - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
// alistamento.
// - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
// alistamento.


class Ex022
{
  public int yearBirth;

  public void IamAlisted()
  {
    Console.WriteLine("Digite em qual ano você nasceu: ");
    yearBirth = Convert.ToInt32(Console.ReadLine());

    DateTime actualYear = new DateTime();
    int agePerson = actualYear.Year - yearBirth;


    Console.Clear();
    if (agePerson < 18)
    {
      Console.WriteLine($"Você tem {agePerson} anos de idade, faltam {18 - agePerson} anos para o seu alistamento");
    }
    else
    {
      Console.WriteLine($"Você tem {agePerson} anos de idade, já se passaram {agePerson - 18} anos desde o seu alistamento");
    }
    
  }
}

