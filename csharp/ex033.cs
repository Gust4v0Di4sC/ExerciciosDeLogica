// Escreva um programa para aprovar ou não o empréstimo bancário para a compra
// de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e
// em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que
// ela não pode exceder 30% do salário ou então o empréstimo será negado.

class Ex033
{
  public double houseValor;
  public double salaryBuyer;

  public int yearsPaying;

  public void CouldIVote()
  {
    Console.WriteLine("Digite o valor da casa: ");
    houseValor = Convert.ToDouble(Console.ReadLine());

    Console.WriteLine("Digite o seu salario: ");
    salaryBuyer = Convert.ToDouble(Console.ReadLine());

    Console.WriteLine("Digite em quantos anos pretende pagar: ");
    yearsPaying = Convert.ToInt32(Console.ReadLine());



    double timesValue = houseValor / (yearsPaying * 12);

    double thirdPercent = salaryBuyer - (salaryBuyer * 30 / 100);


    Console.Clear();
    if (timesValue > thirdPercent)
    {
      Console.WriteLine($"emprestimo negado, seu salario: {salaryBuyer}, valor da prestação: {timesValue}");
    }
    else
    {
      Console.WriteLine($"emprestimo concedido, seu salario: {salaryBuyer}, valor da prestação: {timesValue}");
    }

  }
}

