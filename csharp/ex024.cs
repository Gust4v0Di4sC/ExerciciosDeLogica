// Faça um algoritmo que pergunte a distância que um passageiro deseja
// percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
// viagens até 200Km e R$0.45 para viagens mais longas.


class Ex024
{
  public double kilometer;

  public void CouldIVote()
  {
    Console.WriteLine("Digite a distancia que deseja percorrer: ");
    kilometer = Convert.ToDouble(kilometer);



    Console.Clear();
    if (kilometer <= 200)
    {
      Console.WriteLine($"você percorreu {kilometer}Km, preço da passagem R$:{kilometer * 0.50}");
    }
    else
    {
      Console.WriteLine($"você percorreu {kilometer}Km, preço da passagem R$:{kilometer * 0.45}");
    }
    
  }
}

