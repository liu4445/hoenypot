package com.honey.backend.controller;

import com.honey.backend.response.*;
import com.honey.backend.service.AssemblyService;
import com.honey.backend.service.BillService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/assembly")
@Tag(name = "Assembly Info", description = "Assembly Info(국회의원 정보) API")
public class AssemblyController {

    private final AssemblyService assemblyService;
    private final BillService billService;

    @GetMapping()
    @Operation(summary = "국회의원 리스트 조회", description = "지역/ 이름 / 정당별 국회의원 리스트 정보 API")
    public ResponseEntity<List<AssemblyListResponse>> findAllAssembly(@RequestParam Map<String, String> params) {
        String sidoName = params.get("sido");
        String sigunguName = params.get("sigungu");
        String dongName = params.get("dong");
        String word = params.get("word");
        Integer page = params.get("page") != null ? Integer.parseInt(params.get("page")) : 0;
        Integer limit = params.get("limit") != null ? Integer.parseInt(params.get("limit")) : 10;
        String poly = params.get("poly");

        List<AssemblyListResponse> assemblyListResponseList = assemblyService.findAll(sidoName, sigunguName, dongName, page, limit, word, poly);
        return assemblyListResponseList.isEmpty() ? ResponseEntity.status(HttpStatus.NO_CONTENT).build() : ResponseEntity.status(HttpStatus.OK).body(assemblyListResponseList);
    }

    @GetMapping("/{assembly_id}")
    @Operation(summary = "국회의원 상세 조회", description = "국회의원 상세 API")
    public ResponseEntity<AssemblyResponse> findById(@PathVariable(name = "assembly_id") Long assemblyId) {

        return ResponseEntity.status(HttpStatus.OK).body(assemblyService.findById(assemblyId));
    }

    @GetMapping("/{assembly_id}/bill")
    @Operation(summary = "국회의원의 발의안 리스트 조회", description = "국회의원의 발의안 리스트 API")
    public ResponseEntity<List<BillResponse>> findAllBillByAssemblyId(@PathVariable(name = "assembly_id") Long assemblyId, @RequestParam(required = false) Long cmitId) {
        List<BillResponse> billResponseList = assemblyService.findAllBillByAssemblyIdAndCmitId(assemblyId, cmitId);
        return billResponseList.isEmpty() ? ResponseEntity.status(HttpStatus.NO_CONTENT).build() : ResponseEntity.status(HttpStatus.OK).body(billResponseList);
    }

    @GetMapping("/{assembly_id}/sns")
    @Operation(summary = "국회의원의 SNS 정보", description = "국회의원의 SNS API")
    public ResponseEntity<SnsResponse> findByAssemblyId(@PathVariable(name = "assembly_id") Long assemblyId) {

        return ResponseEntity.status(HttpStatus.OK).body(assemblyService.findSnsByAssemblyId(assemblyId));
    }

    @GetMapping("/{assembly_id}/most")
    @Operation(summary = "국회의원의 가장 많이 발의한 분야 리스트", description = "국회의원의 가장 많이 발의한 분야 리스트 API")
    public ResponseEntity<List<CommitteeResponse>> findMostCmitByAssemblyId(@PathVariable(name = ("assembly_id")) Long assemblyId) {

        return ResponseEntity.status(HttpStatus.OK).body(assemblyService.findMostCommitteeByAssemblyId(assemblyId));
    }

    @GetMapping("/{assembly_id}/bill/stat")
    @Operation(summary = "국회의원의 의안 추진 현황 ", description = "국회의원의 의안 추진 현황 API")
    public ResponseEntity<BillStatResponse> getBillStat(@RequestParam Map<String, String> params, @PathVariable(name = ("assembly_id")) Long assemblyId) {
        Long cmitId = params.get("cmitId") != null ? Long.parseLong(params.get("cmitId")) : null;
        return ResponseEntity.status(HttpStatus.OK).body(billService.getBillStat(assemblyId, cmitId));
    }

}
