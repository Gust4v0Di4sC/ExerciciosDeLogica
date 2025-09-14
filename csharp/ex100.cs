//  Melhore o exercício 96, criando além da função Media() uma outra função
// chamada Situacao(), que vai retornar para o programa principal se o aluno está
// APROVADO, em RECUPERAÇÃO ou REPROVADO. Essa nova função, vai receber como
// parâmetro o resultado retornado pela função Media().


class Ex100
{
   public string Situacao(int media)
  {
    if (media <= 4.9)
    {
      return $"Sua media é {media}, você está REPROVADO";
    } else if (media > 5.0 && media <= 6.9)
    {
      return $"Sua media é {media}, você está de RECUPERAÇÃO";
    } else {
      return $"Sua media é {media}, você está APROVADO";
     }    
  }

  public int Media(int valueOne, int valueTwo)
  {
    int media = valueOne + valueTwo / 2;
    Situacao(media);
    return media;
  }


  public void InputValores()
  {
    Console.WriteLine("Digite o valor 1");
    int value1 = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Digite o valor 2");
    int value2 = Convert.ToInt32(Console.ReadLine());

    Media(value1, value2);
  }

  public void FirstCountdown()
  {
    InputValores();
  }
}

