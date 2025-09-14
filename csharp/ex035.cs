// Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O
// aluguel de um carro custa R$90 por dia para carro popular e R$150 por dia para
// carro de luxo. Além disso, o cliente paga por Km percorrido. Faça um programa
// que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e
// quantos Km foram percorridos. No final mostre o preço a ser pago de acordo com a
// tabela a seguir:
// - Carros populares (aluguel de R$90 por dia)
// - Até 100Km percorridos: R$0,20 por Km
// - Acima de 100Km percorridos: R$0,10 por Km
// - Carros de luxo (aluguel de R$150 por dia)
// - Até 200Km percorridos: R$0,30 por Km
// - Acima de 200Km percorridos: R$0,25 por Km

class Ex035
{
  public int rentDays;
  public double kilometersPerc;
  public int typeCar;

  public void MonthRentalVehicle()
  {
    Console.WriteLine("Digite quantos dias voce alugou o carro: ");
    rentDays = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Digite quantos Km percorreu: ");
    kilometersPerc = Convert.ToDouble(Console.ReadLine());

    Console.WriteLine("Digite o tipo do carro 1-[popular] 2-[luxo]: ");
    typeCar = Convert.ToInt32(Console.ReadLine());

    int rentalValue = 90 * rentDays;
    int rentalValue2 = 150 * rentDays;


    Console.Clear();
    if (typeCar == 1)
    {
      if (kilometersPerc <= 100)
      {
        Console.WriteLine($"Preço a ser pago {rentalValue + (kilometersPerc * 0.20)}");
      }
      else
      {
        Console.WriteLine($"Preço a ser pago {rentalValue + (kilometersPerc * 0.10)}");
      }
    }
    else
    {
      if (kilometersPerc <= 200)
      {
        Console.WriteLine($"Preço a ser pago {rentalValue2 + (kilometersPerc * 0.30)}");
      }
      else
      {
        Console.WriteLine($"Preço a ser pago {rentalValue2 + (kilometersPerc * 0.25)}");
      }
    }

  }
}

