// Crie uma lógica que leia um número inteiro e passe para um procedimento
// ParOuImpar() que vai verificar e mostrar na tela se o valor passado como
// parâmetro é PAR ou ÍMPAR.


class Ex092
{
 

  public string ParOrImpar(int value)
  {
    if (value % 2 == 0)
    {
      return $" O valor {value} é par";
    }
    else
    {
      return $"O valor {value} é impar";
    }
  }

  public void InputValores()
  {
    Console.WriteLine("Digite um valor: ");
    int value = Convert.ToInt32(Console.ReadLine());

    ParOrImpar(value);
  }

  public void FirstCountdown()
  {
    InputValores();
  }
}

