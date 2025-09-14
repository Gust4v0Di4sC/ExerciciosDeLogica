// A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
// um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
// quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
// sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.

class Ex014
{
  public double quantKilometers;
  public int quantDays;

  public void ShowKilometers()
  {
    Console.WriteLine("Digite  a quantidade de kilometros percorridos: ");
    quantKilometers = Convert.ToDouble(Console.ReadLine());

    Console.WriteLine("Digite quantos dias o carro ficou alugado: ");
    quantDays = Convert.ToInt32(Console.ReadLine());

    double priceDay = quantDays * 90;
    double priceKilometer = 0.20 * quantDays;
    double total = priceDay + priceKilometer;


    Console.Clear();
    Console.WriteLine($"Você rodou {quantKilometers} com o carro durante {quantDays} dias, o valor total a pagar pela locação é: R$ {total}");
  }
}

