import {
  Box,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import React from "react";

function CardAccordion({ hasAccordion = false }) {
  if (hasAccordion) {
    return (
      <Accordion allowMultiple allowToggle defaultIndex={[0]} marginTop="8">
        <AccordionItem>
          <AccordionButton>
            <Box as="span" textAlign="left">
              University of Maryland
            </Box>
            <AccordionIcon></AccordionIcon>
          </AccordionButton>
          <AccordionPanel>
            asjdfklasjdfkljakdlfjasdjfa;lskdjfalk;jdflkajdflkjaslkdfjaklsdjflaksjdfl;kajdsfklajdsf;laskjdf;lkasjdf
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as="span" textAlign="left">
              Anne Arundel Community College
            </Box>
            <AccordionIcon></AccordionIcon>
          </AccordionButton>
          <AccordionPanel>
            asjdfklasjdfkljakdlfjasdjfa;lskdjfalk;jdflkajdflkjaslkdfjaklsdjflaksjdfl;kajdsfklajdsf;laskjdf;lkasjdf
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  }
  return null;
}

export default CardAccordion;
