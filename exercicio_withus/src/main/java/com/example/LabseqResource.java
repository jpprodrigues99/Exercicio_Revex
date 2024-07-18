package com.example;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/labseq")
public class LabseqResource {

    LabseqService labseqService = new LabseqService();

    @GET
    @Path("/{n}")
    @Produces(MediaType.TEXT_PLAIN)
    public String getLabseqValue(@PathParam("n") int n) {

        return String.valueOf(labseqService.getLabseq(n)) ;


    }

}
