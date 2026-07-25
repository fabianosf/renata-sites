import { Trans, useTranslation } from "react-i18next";
import { CheckCircle2, Video, Stethoscope, Sparkles, Users } from "lucide-react";
import { siteConfig } from "@/config/site";

const Differentiators = () => {
  const { t } = useTranslation();

  const icons = [Video, Sparkles, Stethoscope, Users];
  const items = t("home.differentiators.items", { count: siteConfig.professional.patients, returnObjects: true }) as {
    title: string;
    description: string;
  }[];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl lg:text-3xl font-medium mb-4">
              {t("home.differentiators.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
              <Trans i18nKey="home.differentiators.p1" components={{ strong: <strong /> }} />
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
              {t("home.differentiators.p2")}
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("home.differentiators.p3")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, index) => {
              const Icon = icons[index] ?? CheckCircle2;
              return (
                <div
                  key={item.title}
                  className="bg-background p-6 rounded-lg shadow-subtle hover:shadow-elevated transition-smooth hover:scale-[1.01] animate-fade-in border border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
