using System;
using System.Linq;
using static System.Console;

namespace csharp
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = new[] { 1, 2, 3, 4, 5 };

            var carrinho = new[] {
                new { nome = "Caneta", qtd = 10, preco = 7.99  },
                new { nome = "Impressora", qtd= 0, preco= 649.50 },
                new { nome = "Caderno", qtd = 4, preco = 27.10 },
                new { nome = "Lapis", qtd = 3, preco = 5.82 },
                new { nome = "Tesoura", qtd = 1, preco = 19.20 },
            };

            // map => retorna lista com os nomes apenas
            var mapResult = carrinho.Select(x => x.nome);

            // filter => retorna os itens com quantidade menor que tres
            var filterResult = carrinho.Where(x => x.qtd < 3);

            // reduce => retorna a soma total do valor dos produtos em estoque
            var reduceResult = carrinho.Aggregate(0.0, (acc, x) => acc + x.preco * x.qtd);

            var mapResult2 = Enumerable.Range(1, 5).Select(x => x * 2);
            var filterResult2 = Enumerable.Range(1, 5).Where(x => x < 3);
            var reduceResult2 = Enumerable.Range(1, 5).Aggregate(0, (acc, x) => acc + x);

            WriteLine(string.Join(", ", mapResult2));
            WriteLine(string.Join(", ", filterResult2));
            WriteLine(string.Join(", ", reduceResult2));


            // map e filter => nome dos produtos com estoque menor que tres
            var result = carrinho
                                .Where(x => x.qtd < 3)
                                .Select(x => x.nome);



            // duas formas de pegar valor total:
            var valorTotal = carrinho.Aggregate(0.0, (acc, x) => acc + x.preco);
            var media = valorTotal / carrinho.Count();

            var valorTotal2 = carrinho.Sum(x => x.preco);
            var media2 = valorTotal2 / carrinho.Count();

            WriteLine(string.Join(", ", media));
            WriteLine(string.Join(", ", media2));



        }
    }
}
