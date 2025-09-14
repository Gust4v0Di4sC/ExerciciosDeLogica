// Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
// para todos, mas especialmente para mulheres. Faça um programa que leia nome,
// sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo
// que:
// - Homens ganham 5% de desconto
// - Mulheres ganham 13% de desconto

class Ex023
{
  public string? name;
  public int gender;
  public double valueShop;

  public void CouldIVote()
  {
    Console.WriteLine("Digite o seu nome: ");
    name = Console.ReadLine();

    Console.WriteLine("Digite o seu sexo:  1-Masculino 2-Feminino 3-Outro");
    gender = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Digite o valor das suas compras: ");
    valueShop = Convert.ToDouble(Console.ReadLine());
    
    Console.Clear();

    switch (gender)
    {
      case 1:
        {
          double valueDisc = valueShop * 5 / 100;
          Console.WriteLine($"Ola {name},  voce recebeu 5% de desconto : {valueShop - valueDisc}");
        }
        break;
      case 2:
        {
          double valueDisc = valueShop * 13 / 100;
          Console.WriteLine($"Ola {name},  voce recebeu 13% de desconto : {valueShop - valueDisc}");
        }
        break;
      case 3:
        {
          double valueDisc = valueShop * 15 / 100;
          Console.WriteLine($"Ola {name},  voce recebeu 13% de desconto : {valueShop - valueDisc}");
        }
        break;
      default:
        Console.WriteLine("Opção Invalida");
        break;
    }

    


    
    

  }
}

