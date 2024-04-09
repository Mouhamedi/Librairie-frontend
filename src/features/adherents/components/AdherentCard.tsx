import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

export const AdherentCard = ({adherent}: {adherent: Adherent}) => {
    const initiaux = `${adherent.nom[0]}${adherent.prenoms[0]}`;
  return (
    <>
        <Card className="shadow-md max-w-lg cursor-pointer hover:scale-105">
            <CardContent className="p-4">
                
                <div className="flex items-center gap-4">
                    <Avatar className="Size-12">
                        <AvatarFallback>{initiaux}</AvatarFallback>
                    </Avatar>
                </div>
                <div className="grid gap-1">
                    <p className=" text-lg font-medium">{`${adherent.nom} ${adherent.prenoms}`}</p>
                    <p className="text-sm text-muted-foreground">{adherent.pseudo}</p>
                </div>
            </CardContent>
        </Card>
    </>
  )
}

export default AdherentCard
