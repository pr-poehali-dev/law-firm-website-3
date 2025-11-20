import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"individual" | "corporate">("individual");

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Scale" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-foreground">АСТАРТЕС</h1>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors">О компании</button>
              <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection("cases")} className="text-sm font-medium hover:text-primary transition-colors">Кейсы</button>
              <button onClick={() => scrollToSection("contacts")} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection("contacts")} className="hidden md:flex">
              Консультация
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="relative py-32 bg-gradient-to-b from-secondary to-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  Юридические услуги премиум-класса
                </h2>
                <p className="text-xl text-muted-foreground">
                  Защищаем ваши интересы с 2010 года. Комплексное сопровождение бизнеса и частных клиентов.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" onClick={() => scrollToSection("contacts")}>
                    Получить консультацию
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection("services")}>
                    Наши услуги
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl animate-fade-in">
                <img 
                  src="https://cdn.poehali.dev/projects/9aa26246-6c01-491a-9412-89d4b7a1a796/files/0ee818ed-1c8c-4b00-86b2-099c5db36b5e.jpg" 
                  alt="Офис АСТАРТЕС"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground">
                АСТАРТЕС — команда высококвалифицированных юристов с более чем 15-летним опытом работы в различных отраслях права.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Award" className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">500+</h3>
                  <p className="text-muted-foreground">Выигранных дел</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">1000+</h3>
                  <p className="text-muted-foreground">Довольных клиентов</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Building2" className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">15+</h3>
                  <p className="text-muted-foreground">Лет на рынке</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Наши услуги</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Комплексная юридическая поддержка для физических и юридических лиц
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  variant={activeTab === "individual" ? "default" : "outline"}
                  onClick={() => setActiveTab("individual")}
                  size="lg"
                >
                  Физические лица
                </Button>
                <Button 
                  variant={activeTab === "corporate" ? "default" : "outline"}
                  onClick={() => setActiveTab("corporate")}
                  size="lg"
                >
                  Юридические лица
                </Button>
              </div>
            </div>

            {activeTab === "individual" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                {[
                  { icon: "Home", title: "Жилищное право", desc: "Сделки с недвижимостью, споры с застройщиками" },
                  { icon: "HeartHandshake", title: "Семейное право", desc: "Разводы, раздел имущества, алименты" },
                  { icon: "Briefcase", title: "Трудовые споры", desc: "Защита прав работников, увольнения" },
                  { icon: "Car", title: "ДТП и страхование", desc: "Возмещение ущерба, споры со страховыми" },
                  { icon: "Shield", title: "Уголовная защита", desc: "Защита прав на всех стадиях процесса" },
                  { icon: "FileText", title: "Наследство", desc: "Оформление наследства, споры о праве" }
                ].map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon name={service.icon as any} className="text-primary" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === "corporate" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                {[
                  { icon: "Building", title: "Регистрация бизнеса", desc: "ООО, ИП, изменения в ЕГРЮЛ" },
                  { icon: "FileCheck", title: "Договорное право", desc: "Разработка и экспертиза контрактов" },
                  { icon: "Scale", title: "Арбитражные споры", desc: "Представительство в судах всех инстанций" },
                  { icon: "ShieldCheck", title: "Налоговое право", desc: "Налоговые проверки, оптимизация" },
                  { icon: "UserCheck", title: "Кадровое право", desc: "Кадровый аудит, трудовые договоры" },
                  { icon: "Landmark", title: "Банкротство", desc: "Процедуры банкротства, реструктуризация" }
                ].map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon name={service.icon as any} className="text-primary" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="cases" className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Наши кейсы</h2>
              <p className="text-lg text-muted-foreground">
                Успешные дела, которыми мы гордимся
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="TrendingUp" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Взыскание 25 млн рублей</h3>
                      <p className="text-muted-foreground mb-4">
                        Успешно представили интересы клиента в арбитражном споре о взыскании задолженности с крупного подрядчика.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-primary">
                        <Icon name="Clock" size={16} />
                        <span>Срок: 8 месяцев</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Home" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Отмена незаконной сделки</h3>
                      <p className="text-muted-foreground mb-4">
                        Добились признания недействительной сделки по отчуждению квартиры, восстановили права клиента.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-primary">
                        <Icon name="Clock" size={16} />
                        <span>Срок: 6 месяцев</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Shield" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Оправдательный приговор</h3>
                      <p className="text-muted-foreground mb-4">
                        Защитили клиента по уголовному делу о мошенничестве, добились полного оправдания.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-primary">
                        <Icon name="Clock" size={16} />
                        <span>Срок: 14 месяцев</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Building2" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Налоговый спор на 12 млн</h3>
                      <p className="text-muted-foreground mb-4">
                        Успешно оспорили решение налогового органа о доначислении налогов, сохранив средства компании.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-primary">
                        <Icon name="Clock" size={16} />
                        <span>Срок: 10 месяцев</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">Контакты</h2>
                <p className="text-lg text-muted-foreground">
                  Свяжитесь с нами для бесплатной консультации
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 15, офис 301</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@astartes.law</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Время работы</h3>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 19:00<br/>Сб: 10:00 - 16:00</p>
                    </div>
                  </div>
                </div>
                <Card>
                  <CardContent className="pt-6">
                    <form className="space-y-4" onSubmit={(e) => {
                      e.preventDefault();
                      alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
                    }}>
                      <div>
                        <Input placeholder="Ваше имя" required />
                      </div>
                      <div>
                        <Input type="tel" placeholder="Телефон" required />
                      </div>
                      <div>
                        <Input type="email" placeholder="Email" required />
                      </div>
                      <div>
                        <Textarea placeholder="Ваш вопрос" rows={4} required />
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        Отправить заявку
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Scale" className="text-primary" size={28} />
              <span className="text-xl font-bold">АСТАРТЕС</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Юридическая компания АСТАРТЕС. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
