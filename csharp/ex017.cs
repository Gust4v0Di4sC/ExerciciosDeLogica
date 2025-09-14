// Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
// 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
// o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.



class Ex017
{
  public double speedCar;

  public void ShowSpeedCar()
  {
    Console.WriteLine("Digite a velocidade que está dirigindo: ");
    speedCar = Convert.ToDouble(Console.ReadLine());

    if (speedCar > 80) {
      Console.WriteLine($"Você foi multado em: R$ {(speedCar - 80) * 5}");
    }
    else
    {
      Console.WriteLine("Velocidade dentro do limite permitido");
    }
    


    Console.Clear();
  }
}

