# encoding url

## main idea

alri so it seems that generateStaticParams does not encode URI's for you automagically.

so, i decided to add a new interface extending my term interface to add the url object property. this will contain the encoded uri which can then be used in any href's or links

## discovery: imports vs props?

while going through the code, i discovered that i sometimes import the terms and sometimes pass them as props... what? why? im just gonna change all of them to imports

ok yes props are used to specify a term in the default export of the generateStaticProps page.

but i dont want to retrieve the term later (using name esp). im gonna pass the whole outputTerm obj

## changes

im gonna change the term interface to inputTerm, which collaboraters will define. then, im gonna add another interface outputTerm that extends inputTerm, which includes the url parameter.

i modelled it after zod's inputType and outputType

### zod?

why not use zod? ...

nah its too much now, i dont need to validate anything (yet).

## docs

also i realized the repo doesnt have a readme that tells me about its structure. would save time debugging. maybe ill add it at a later time.
