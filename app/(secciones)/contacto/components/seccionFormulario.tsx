"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  nombre: z.string().min(2, {
    message: "El nombre es obligatorio",
  }),
  email: z.string().email({
    message: "El correo debe ser válido.",
  }),
  asunto: z.string().min(4, {
    message: "El asunto debe tener al menos 4 caracteres.",
  }),
  numero: z
    .string()
    .min(9, {
      message: "El número debe tener al menos 9 caracteres.",
    })
    .max(9, {
      message: "El numero debe tener solo 9 caracteres.",
    }),
  mensaje: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

export default function SeccionFormulario() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      asunto: "",
      numero: "",
      mensaje: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    form.reset();
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid sm:grid-cols-2 gap-x-7 gap-y-4 sm:gap-y-5">
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Nombre: </FormLabel>
                  <FormControl>
                    <Input {...field} className=" bg-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email: </FormLabel>
                  <FormControl>
                    <Input {...field} className=" bg-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="asunto"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Asunto: </FormLabel>
                  <FormControl>
                    <Input {...field} className=" bg-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="numero"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Número: </FormLabel>
                  <FormControl>
                    <Input {...field} className=" bg-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="mensaje"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Mensaje: </FormLabel>
                <FormControl>
                  <Textarea {...field} rows={4} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            variant="heading"
            className="text-white px-12 py-6 ml-auto  flex items-center"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
