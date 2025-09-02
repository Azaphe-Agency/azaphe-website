import { Star, Quote } from "lucide-react";
import carlosMendoza from "@/assets/carlos-mendoza.jpg";
import anaPaulaSilva from "@/assets/ana-paula-silva.jpg";
import robertoSantos from "@/assets/roberto-santos.jpg";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Mendoza",
      business: "Serviços de Limpeza - Miami",
      content: "Depois que a Azaphe otimizou meu Google Meu Negócio, as ligações aumentaram 300%. Só no primeiro mês já recuperei o investimento com novos clientes.",
      result: "+300% em ligações",
      rating: 5,
      image: carlosMendoza
    },
    {
      name: "Ana Paula Silva",
      business: "Salão de Beleza - Toronto",
      content: "O site novo e as redes sociais profissionais fizeram toda diferença. Agora tenho uma fila de espera e precisei contratar mais funcionárias!",
      result: "Fila de espera criada",
      rating: 5,
      image: anaPaulaSilva
    },
    {
      name: "Roberto Santos",
      business: "Mecânica Automotiva - Sydney",
      content: "Antes ninguém me achava no Google. Hoje apareço em primeiro lugar quando procuram mecânica na minha região. Faturamento dobrou em 2 meses.",
      result: "Faturamento dobrou",
      rating: 5,
      image: robertoSantos
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Resultados reais de clientes reais
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como a Azaphe transformou negócios de brasileiros 
            em mais visibilidade, clientes e faturamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-xl p-8 border shadow-sm relative">
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
