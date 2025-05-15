
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send } from 'lucide-react';

type MaterialType = "plastic" | "paper" | "metal" | "glass" | "electronics" | "other";

const SuggestPage = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    locationName: "",
    address: "",
    city: "",
    postalCode: "",
    materials: [] as MaterialType[],
    description: "",
    isSubmitted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleMaterialChange = (material: MaterialType) => {
    setFormState((prev) => {
      const isChecked = prev.materials.includes(material);
      if (isChecked) {
        return { ...prev, materials: prev.materials.filter(m => m !== material) };
      } else {
        return { ...prev, materials: [...prev.materials, material] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação de envio - normalmente seria uma chamada API
    setTimeout(() => {
      toast({
        title: "Sugestão recebida!",
        description: "Obrigado por contribuir para o ReciclaJá. Sua sugestão será analisada em breve.",
        className: "bg-recicla-500 text-white border-recicla-600",
      });
      
      setFormState({
        name: "",
        email: "",
        locationName: "",
        address: "",
        city: "",
        postalCode: "",
        materials: [],
        description: "",
        isSubmitted: true,
      });
    }, 1000);
  };

  const materialOptions: { id: MaterialType; label: string }[] = [
    { id: "plastic", label: "Plástico" },
    { id: "paper", label: "Papel/Papelão" },
    { id: "metal", label: "Metal" },
    { id: "glass", label: "Vidro" },
    { id: "electronics", label: "Eletrônicos" },
    { id: "other", label: "Outros (especificar na descrição)" }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-recicla-800 dark:text-white mb-4">
            Sugerir Ponto de Coleta
          </h1>
          <p className="text-lg text-recicla-700 dark:text-recicla-200 max-w-3xl mx-auto">
            Conhece um ponto de coleta que não está em nosso mapa? Ajude nossa comunidade a crescer sugerindo um novo local.
          </p>
        </header>
        
        {formState.isSubmitted ? (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-recicla-600">Sugestão Enviada!</CardTitle>
              <CardDescription>
                Agradecemos sua contribuição para o ReciclaJá.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center py-6">
                <div className="rounded-full bg-recicla-100 p-3 mb-4">
                  <Send className="h-6 w-6 text-recicla-500" />
                </div>
                <p className="mb-6 text-center text-recicla-700 dark:text-recicla-200">
                  Sua sugestão foi recebida e será analisada por nossa equipe. Em breve ela poderá fazer parte do nosso mapa de pontos de coleta.
                </p>
                <Button onClick={() => setFormState(prev => ({ ...prev, isSubmitted: false }))}>
                  Sugerir outro ponto
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="max-w-3xl mx-auto">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Informações do Ponto de Coleta</CardTitle>
                <CardDescription>
                  Preencha os dados do local que deseja sugerir
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Seu Nome</Label>
                        <Input 
                          id="name" 
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Digite seu nome" 
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Seu E-mail</Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="seu@email.com" 
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="locationName">Nome do Local</Label>
                      <Input 
                        id="locationName" 
                        name="locationName"
                        value={formState.locationName}
                        onChange={handleChange}
                        placeholder="Ex: Ecoponto Vila Mariana" 
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Endereço</Label>
                      <Input 
                        id="address" 
                        name="address"
                        value={formState.address}
                        onChange={handleChange}
                        placeholder="Rua, número" 
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">Cidade</Label>
                        <Input 
                          id="city" 
                          name="city"
                          value={formState.city}
                          onChange={handleChange}
                          placeholder="Brasília" 
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">CEP</Label>
                        <Input 
                          id="postalCode" 
                          name="postalCode"
                          value={formState.postalCode}
                          onChange={handleChange}
                          placeholder="00000-000" 
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Materiais Coletados</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2">
                        {materialOptions.map((option) => (
                          <div key={option.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`material-${option.id}`} 
                              checked={formState.materials.includes(option.id)}
                              onCheckedChange={() => handleMaterialChange(option.id)}
                            />
                            <Label htmlFor={`material-${option.id}`} className="text-sm font-normal">
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Informações Adicionais</Label>
                      <Textarea 
                        id="description" 
                        name="description"
                        value={formState.description}
                        onChange={handleChange}
                        placeholder="Horários de funcionamento, restrições, observações, etc." 
                        rows={4}
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-recicla-500 hover:bg-recicla-600">
                    Enviar Sugestão
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="text-sm text-center text-recicla-600 dark:text-recicla-300">
              <p>Após o envio, nossa equipe analisará a sugestão e incluirá o ponto no mapa. Obrigado por contribuir!</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SuggestPage;
