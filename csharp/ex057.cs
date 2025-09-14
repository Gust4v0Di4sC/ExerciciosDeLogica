// Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários.
// No final, mostre o total de salários pagos aos homens e o total pago às
// mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não
// sempre que ler os dados de um funcionário.

class Ex057
{
  public int counter = 0;
  public int soma = 0;

  public bool Conti = true;

  public float salaryMan;

  public float salaryWoman;

  public void FirstCountdown()
  {
    while (Conti)
    {
      Console.WriteLine("Digite o seu salario: ");
      float inputSalary = Convert.ToSingle(Console.ReadLine());

      Console.WriteLine("Digite o seu Genero: 1[man] 2[fem]");
      int inputGender = Convert.ToInt32(Console.ReadLine());

      Console.WriteLine("Deseja Continuar? 1-Sim 2-nao");
      int inputContinue = Convert.ToInt32(Console.ReadLine());
      switch (inputContinue)
      {
        case 1:
          Conti = true;
          break;
        case 2:
          Conti = false;
          break;
        default:
          Console.WriteLine("Opção invalida");
          break;
      }

      if (inputGender == 1)
      {
        salaryMan += inputSalary;
      }
      else
      {
        salaryWoman += inputSalary;
      }
      
    }
    Console.Write($"Total pago aos homens: {salaryMan}");
    Console.Write($"Total pago as mulheres : {salaryWoman}");
  }
}

