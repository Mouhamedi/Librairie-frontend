import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PhoneInput } from "@/components/ui/input-phone";
import { z } from "zod";
import { ADHERENT_URL } from "@/utils/_constants";
import { Loader } from "lucide-react";
import { useDispatch } from "react-redux";
import { addAdherent, toogleSheet } from "@/store/slices/adherent.slice";
import { adherentSchema } from "@/features/schema";
import useMutation from "../hooks/useMutation";
import useCreateForm from "../hooks/useCreateForm";

export function AdherentForm({
  adherent,
}: {
  adherent?: Adherent;
}) {
  const initialValue: Adherent = adherent || {
    nom: "",
    pseudo: "",
    prenoms: "",
    adresse: {
      rue: "",
      ville: "",
      codePostal: "",
      numeroTelephone: null,
    },
    genre: "MASCULIN",
    dateInscription: new Date(),
  };
  const form = useCreateForm(adherentSchema, initialValue);
  const { isLoading, handleMutation } = useMutation
  ();

const dispatch = useDispatch()

  const onSubmit = (data: z.infer<typeof adherentSchema>) => {
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    handleMutation(ADHERENT_URL, option, onSuccess)
  }

  const onSuccess = (adherentCreated: Adherent) => {
    dispatch(addAdherent(adherentCreated))
    dispatch(toogleSheet())
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
          <FormField
            control={form.control}
            name="nom"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-900">Nom</FormLabel>
                <FormControl>
                  <Input placeholder="Moussa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="prenoms"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-900">Prénoms</FormLabel>
                <FormControl>
                  <Input placeholder="Ali" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pseudo"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-900">Pseudo</FormLabel>
                <FormControl>
                  <Input placeholder="Momo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="genre"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Genre</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex space-x-3"
                  >
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="MASCULIN" />
                      </FormControl>
                      <FormLabel className="font-normal">Masculin</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="FEMININ" />
                      </FormControl>
                      <FormLabel className="font-normal">Féminin</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="INCONNU" />
                      </FormControl>
                      <FormLabel className="font-normal">Inconnu</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="adresse.ville"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-900">
                  Ville de résidence
                </FormLabel>
                <FormControl>
                  <Input placeholder="Cotonou ..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="adresse.rue"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-900">Rue</FormLabel>
                <FormControl>
                  <Input placeholder="Suru Lere..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="adresse.codePostal"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-900">Code postal</FormLabel>
                <FormControl>
                  <Input placeholder="add229 ..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="adresse.numeroTelephone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-900">
                  Numéro de téléphone
                </FormLabel>
                <FormControl>
                  <PhoneInput defaultCountry="BJ" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="mt-4 w-full"
            type="submit"
            disabled={!form.formState?.isValid}
          >
            {isLoading && <Loader />}
            Créer
          </Button>
        </form>
      </Form>
    </>
  );
}

export default AdherentForm;