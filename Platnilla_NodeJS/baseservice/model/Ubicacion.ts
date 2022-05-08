export class Ubicacion {
  private provincia: string;
  private canton: string;
  private distrito: string;
  private direccionExacta: string;
  private latitud: bigint;
  private longitud: bigint;


    /**
     * Getter $provincia
     * @return {string}
     */
	public get $provincia(): string {
		return this.provincia;
	}

    /**
     * Getter $canton
     * @return {string}
     */
	public get $canton(): string {
		return this.canton;
	}

    /**
     * Getter $distrito
     * @return {string}
     */
	public get $distrito(): string {
		return this.distrito;
	}

    /**
     * Getter $direccionExacta
     * @return {string}
     */
	public get $direccionExacta(): string {
		return this.direccionExacta;
	}

    /**
     * Getter $latitud
     * @return {bigint}
     */
	public get $latitud(): bigint {
		return this.latitud;
	}

    /**
     * Getter $longitud
     * @return {bigint}
     */
	public get $longitud(): bigint {
		return this.longitud;
	}

    /**
     * Setter $provincia
     * @param {string} value
     */
	public set $provincia(value: string) {
		this.provincia = value;
	}

    /**
     * Setter $canton
     * @param {string} value
     */
	public set $canton(value: string) {
		this.canton = value;
	}

    /**
     * Setter $distrito
     * @param {string} value
     */
	public set $distrito(value: string) {
		this.distrito = value;
	}

    /**
     * Setter $direccionExacta
     * @param {string} value
     */
	public set $direccionExacta(value: string) {
		this.direccionExacta = value;
	}

    /**
     * Setter $latitud
     * @param {bigint} value
     */
	public set $latitud(value: bigint) {
		this.latitud = value;
	}

    /**
     * Setter $longitud
     * @param {bigint} value
     */
	public set $longitud(value: bigint) {
		this.longitud = value;
	}

}
