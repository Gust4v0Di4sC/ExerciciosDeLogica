// Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
// BISSEXTO

class Ex021
{
  public int yearInput;

  public void IsBissext()
  {
    Console.WriteLine("Digite um ano: ");
    yearInput = Convert.ToInt32(Console.ReadLine());

    


    Console.Clear();
    if (yearInput % 4 == 0)
    {
      Console.WriteLine($"O ano {yearInput} é Bissexto");
    }
    else
    {
       Console.WriteLine($"O ano {yearInput} não é Bissexto");
    }
    
  }
}

