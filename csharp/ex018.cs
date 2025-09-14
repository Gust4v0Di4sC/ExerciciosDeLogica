// Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
// dela e depois mostre se ela pode ou não votar.


class Ex018
{
  public int yearBirth;

  public void CouldIVote()
  {
    Console.WriteLine("Digite em qual ano você nasceu: ");
    yearBirth = Convert.ToInt32(Console.ReadLine());

    DateTime actualYear = new DateTime();
    int agePerson = actualYear.Year - yearBirth;


    Console.Clear();
    if (agePerson >= 16)
    {
      Console.WriteLine($"Você tem {agePerson} anos de idade, já pode votar");
    }
    else
    {
      Console.WriteLine($"Você tem {agePerson} anos de idade, ainda não pode votar");
    }
    
  }
}

