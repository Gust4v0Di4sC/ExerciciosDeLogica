// O Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no
// peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o
// indivíduo dentro de certas faixas.
// - abaixo de 18.5: Abaixo do peso
// - entre 18.5 e 25: Peso ideal
// - entre 25 e 30: Sobrepeso
// - entre 30 e 40: Obesidade
// - acima de 40: Obseidade mórbida


class Ex034
{
  public double weight;
  public double height;

  public void CouldIVote()
  {
    Console.WriteLine("Digite o seu peso: ");
    weight = Convert.ToDouble(Console.ReadLine());

    Console.WriteLine("Digite a sua altura: ");
    height = Convert.ToDouble(Console.ReadLine());

    double imc = weight / height * height;
    
    Console.Clear();
    if (imc < 18.5)
    {
      Console.WriteLine($"IMC {imc}, Abaixo do peso");
    }
    else if (imc >= 18.5 && imc <= 25)
    {
      Console.WriteLine($"IMC {imc}, Peso ideal");
    }
    else if (imc >= 25 && imc <= 30)
    {
      Console.WriteLine($"IMC {imc}, Sobrepeso");
    }
    else if(imc >= 30 && imc <= 40)
    {
      Console.WriteLine($"IMC {imc}, Obesidade");
    }else if(imc > 40)
    {
      Console.WriteLine($"IMC {imc}, Obesidade Morbida");
    }

  }
}

