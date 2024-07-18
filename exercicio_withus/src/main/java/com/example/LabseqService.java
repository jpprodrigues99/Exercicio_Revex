package com.example;

import java.util.HashMap;
import java.util.Map;


public class LabseqService {
    private final Map<Integer, Integer> cache = new HashMap<>();

    public LabseqService() {
        cache.put(0, 0);
        cache.put(1, 1);
        cache.put(2, 0);
        cache.put(3, 1);
    }



    public int getLabseq (int n){
        if (n < 0) {
            throw new IllegalArgumentException("number must be non-negative");
        }
        if (cache.containsKey(n)) {
            return cache.get(n);
        }

        int i1 = (n-4);
        int i2 = (n-3);

        int n1 = getLabseq(i1);
        int n2 = getLabseq(i2);

        int result = n1 + n2;
        cache.put(n, result);

        return result;
    }
}
